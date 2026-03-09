const { Demanda, Categoria, AtualizacaoDemanda } = require("../models");

// Buscar todas as demandas
exports.getDemandas = async (req, res) => {
  const demandas = await Demanda.findAll({
    include: [Categoria]
  });

  res.json(demandas);
};

// Criar uma nova demanda
exports.createDemanda = async (req, res) => {
  const { titulo, descricao, categoriaId, dataEsperada } = req.body;

  const demanda = await Demanda.create({
    titulo,
    descricao,
    CategoriaId: categoriaId,
    status: "Em análise",
    dataEsperada
  });

  await AtualizacaoDemanda.create({
    mensagem: "Demanda recebida e enviada para análise",
    status: "Em análise",
    DemandaId: demanda.id
  });

  res.json(demanda);
};

// Atualizar o status de uma demanda
exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status, mensagem } = req.body;

  const demanda = await Demanda.findByPk(id);

  if (!demanda) {
    return res.status(404).json({ erro: "Demanda não encontrada" });
  }

  demanda.status = status;
  await demanda.save();

  await AtualizacaoDemanda.create({
    mensagem,
    status,
    DemandaId: id
  });

  res.json(demanda);
};

// Buscar o histórico de atualizações de uma demanda
exports.getAtualizacoesDemanda = async (req, res) => {
  const { id } = req.params;

  const atualizacoes = await AtualizacaoDemanda.findAll({
    where: { DemandaId: id },
    order: [['createdAt', 'ASC']]
  });

  res.json(atualizacoes);
};