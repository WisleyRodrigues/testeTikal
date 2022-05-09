const Database = require('../config/database')

async function read (req, res) {
  const { alunoId } = req.params

  const [alunos] = await Database.query(
    `SELECT
        a.id, nome, n1, n2, n3, n4, (n1 + n2+ n3 + n4) / 4 as media,
        CASE
            WHEN (n1 + n2+ n3 + n4) / 4 >= 6 THEN 'Aprovado'
            WHEN (n1 + n2+ n3 + n4) / 4 >= 4 THEN 'Recuperação'
            ELSE 'Reprovado'
        END situacao
    FROM alunos AS a INNER JOIN notas AS n ON n.aluno_id = a.id
    WHERE a.id = ${alunoId}`
  )

  res.status(200)
  res.send(alunos)
}

module.exports = { read }
