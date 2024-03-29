var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Novo Cadastro', doc: {"nome":"","sobrenome":"", "telefone": "", "email": "", "endereco": "", "imagem": ""}, action: '/new' });
});

router.post('/new', function(req, res) {
  var nome = req.body.nome;
  var sobrenome = req.body.sobrenome;
  var telefone = req.body.telefone;
  var email = req.body.email;
  var endereco = req.body.endereco;
  var imagem = req.body.imagem;
  global.db.insert({nome, sobrenome, telefone, email, endereco, imagem}, (err, result) => {
          if(err) { return console.log(err); }
          else { res.redirect('/'); }
  });
});

router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  global.db.findOne(id, (e, docs) => {
      if(e) { return console.log(e); }
      res.render('new', { title: 'Edição de Contanto', doc: docs[0], action: '/edit/' + docs[0]._id });
  });
});

router.post('/edit/:id', function(req, res) {
  var id = req.params.id;
  var nome = req.body.nome;
  var sobrenome = req.body.sobrenome;
  var telefone = req.body.telefone;
  var email = req.body.email;
  var endereco = req.body.endereco;
  var imagem = req.body.imagem;
  global.db.update(id, {nome, sobrenome, telefone, email, endereco, imagem}, (e, result) => {
        if(e) { return console.log(e); }
        res.redirect('/');
    });
});

router.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  global.db.deleteOne(id, (e, r) => {
        if(e) { return console.log(e); }
        res.redirect('/');
  });
});

router.get('/:pagina?', async function(req, res) {
  const pagina = parseInt(req.params.pagina || "1");
  const docs = await global.db.findAll(pagina);
  const count = await global.db.countAll();
  const qtdPaginas = Math.ceil(count / global.db.TAMANHO_PAGINA);
  res.render('index', { title: 'Lista de Contantos', docs, count, qtdPaginas, pagina });
});

module.exports = router;
