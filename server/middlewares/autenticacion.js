
const jwt = require('jsonwebtoken');

//===========0
//Verificat Token
//==========0

let verificaToken = ( req, res, next ) => {

    let token = req.get('Authorization');

    jwt.verify( token, process.env.SEED, (err, decoded ) => {

        if( err ){
            return res.status(401).json({
                ok: false, 
                err
            })
        }

        req.usuario = decoded.usuario; 
        next();

    })

};

let verificaAdminRole = ( req, res, next ) => {

    let usuario = req.usuario; 

    console.log(usuario.role);

    if( usuario.role != 'ADMIN_ROLE'){
        return res.json({
            ok:false,
            err:{
                message: 'El usuario no es administrador'
            }
        });
    }
     else{
         next();
     }
    
};

module.exports = {
    verificaToken,
    verificaAdminRole
}