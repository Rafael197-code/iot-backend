const prisma = require("../database/prisma");

class Temperatura {
  async criar(valor) {
    return await prisma.temperatura.create({
      data: {
        valor,
      },
    });
  }

  async listar() {
    return await prisma.temperatura.findMany;
  }
}

module.exports = new Temperatura();
