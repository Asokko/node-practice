const keys=require('../keys/index')

module.exports=function(email,token){
    return{
        to:email,
        from:keys.EMAIL_FROM,
        subject:'Восствановление доступа',
        html:`
            <h1>Вы забыл пароль?</h1>
            <p>Если нет, проигнорируйте данное письмо</p> 
            <p>Иначе нажмите на ссылку ниже:</p> 
            <P><a href="${keys.BASE_URL}/auth/password/${token}">Магазин курсов</a></p>
            <hr/> 
            <a href="${keys.BASE_URL}">Магазин курсов</a>
        `
    }
}