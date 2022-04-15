export const validate = (data,type) => {
    const errors = {}
    
    
    if(!data.email) {
        errors.email = "ایمیل را وارد کنید"
    } else if(!/[a-z][a-z0-9_\.]{2,}@[a-z]{2,5}\.[a-z]{2,4}/i.test(data.email)){
        errors.email = "ایمیل نامعتبر است"
    } else {
        delete errors.email
    }


    if(!data.password) {
        errors.password = "رمز عبور را وارد کنید"
    } else if(data.password.length < 6) {
        errors.password = "رمز عبور باید شش کاراکتر یا بیشتر باشد"
    } else {
        delete errors.password
    }




    if(type === "signup"){
        if (!data.name.trim()) {
            errors.name = "نام را وارد کنید"
        } else {
            delete errors.name
        }

        if (!data.lastName.trim()) {
            errors.lastName = "نام خانوادگی را وارد کنید"
        } else {
            delete errors.lastName
        }

          if(!data.confirmPassword) {
              errors.confirmPassword = "تکرار رمز عبور را وارد کنید"
            } else if(data.confirmPassword !== data.password){
                errors.confirmPassword = "تکرار رمز عبور همخوانی ندارد"
            } else {
                delete errors.confirmPassword
            } 
        }
        
        if(type === "activate"){
            if(!data.activate) {
                errors.activate = "رمز فعال سازی را وارد کنید"
            } else if(!/123456/i.test(data.activate)){
                errors.activate = "رمز فعال سازی نامعتبر است"
            } else {
                delete errors.activate
            } 
        }
        
        

    



    return errors

}