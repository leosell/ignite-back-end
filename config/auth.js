import jwt from "jsonwebtoken";

const verificarToken = (token, res) => {
    jwt.verify(
        token,
        process.env.CHAVE_CRIPTOGRAFICA,
        (error, authData) => {
            if (error) {
                res.sendStatus(403)
            } else {
                res.json({ authData })
            }
        }
    )
}

export default verificarToken;