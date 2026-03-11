const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const { User } = require("../models")

// criar usuário
exports.registrar = async (req,res)=>{

 try{

  const {nome,email,cargo,senha} = req.body

  const hash = await bcrypt.hash(senha,10)

  const user = await User.create({
   nome,
   email,
   senha:hash,
   cargo
  })

  res.json(user)

 }catch(error){

  res.status(500).json({error:"Erro ao criar usuário"})

 }

}

// login
exports.login = async (req,res)=>{

 try{

  const {email,senha} = req.body

  const user = await User.findOne({where:{email}})

  if(!user){
   return res.status(401).json({error:"Usuário não encontrado"})
  }

  const valid = await bcrypt.compare(senha,user.senha)

  if(!valid){
   return res.status(401).json({error:"Senha inválida"})
  }

  const token = jwt.sign(
   {id:user.id,role:user.role},
   process.env.JWT_SECRET,
   {expiresIn:"1d"}
  )

  res.json({token,user})

 }catch(error){

  res.status(500).json({error:"Erro no login"})

 }

}