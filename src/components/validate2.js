export const validate2 = (data,type) => {
    const errors = {}

    if(!data.activate) {
                errors.activate = "رمز فعال سازی را وارد کنید"
            } else if(!/^123456$/i.test(data.activate)){
                errors.activate = "رمز فعال سازی نامعتبر است"
            } else {
                delete errors.activate
            } 

return errors
}