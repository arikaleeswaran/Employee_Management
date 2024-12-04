function Validate(values){
    let error ={}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phone_pattern = /^[0-9]{10}$/
    const name_pattern = /^[a-zA-Z\s]+$/

    if(!values.email){
        error.email = "Email is required!"
    }else if(!email_pattern.test(values.email)){
        error.email = "Invalid Email format"
    }

    if(!values.name){
        error.name = "Name is required!"
    }else if(values.name.trim() === ""){
        error.name = "Name should not be Empty!"
    }else if(!values.name.length > 2){
        error.name = "Name should be at least 2 characters!"
    }else if(!name_pattern.test(values.name)){
        error.name = "Name should contain only characters and space!"
    }

    if(!values.phone){
        error.phone = "Phone number required!"
    }else if(!phone_pattern.test(values.phone)){
        error.phone = "Phone Number must be 10 digits!"
    }

    if(!values.role){
        error.role = "Role is required"
    }else if(values.role.trim() === ""){
        error.role = "Role should not be Empty!"
    }

    if(!values.dept){
        error.dept = "Department is required"
    }else if(values.dept.trim() === ""){
        error.dept = "Department should not be Empty!"
    }

    if(!values.d_join){
        error.d_join = "Date of Join is required!"
    }else{
        const today = new Date();
        const joinDate = new Date(values.d_join);

        if(joinDate > today){
            error.d_join = "Date of Join can't be future!"
        }
    }
    return error;
}

export default Validate;