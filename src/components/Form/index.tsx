import React from 'react';
import {useForm, Resolver, SubmitHandler, useWatch, Control} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {IntervieweeForm} from "./styles";

type FormValues = {
    firstName: string;
    surName: string;
    email: string;
    age?: number;
    mobile: string;
    scheduleAt?: string;
    gender: `Male` | `Female` | `others`;
    experience: `fresher` | `experienced`;
    stack?: `MEAN` | `MERN`
    expectedSalary?: string;
    isDeveloper: boolean | string;

};

const resolver: Resolver<FormValues> = async values => {
    return {
        values: values.firstName ? values : {},
        errors: !values.firstName ? {firstName: {type: "required", message: "This is required"}} : {}
    }
}

const Schema = yup.object().shape({
    firstName: yup.string().min(4).max(6).required(),
    surName: yup.string().min(4).max(6).required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(14).required(),
    repeatPassword: yup.string().oneOf([yup.ref('password'), null]),
})

function IsolateReRender({control}: { control: Control<FormValues> }) {
    const firstName = useWatch({
        control,
        name: "firstName",
        defaultValue: "defaultName"
    });

    return <div>{firstName}</div>;
}

function Form() {
    // const {register, handleSubmit, watch, formState: {errors}} = useForm({resolver: yupResolver(Schema)});
    // const {register, handleSubmit, watch, formState: {errors}} = useForm<FormValues>({resolver});
    const {register, watch, control, handleSubmit} = useForm<FormValues>();

    console.log(watch('firstName'));

    // const onSubmit = handleSubmit((data) => console.log(data))
    // const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstname">FirstName:</label>
            <input {...register("firstName")} id={"firstName"}/>

            <label htmlFor="surName">SurName:</label>
            <input {...register("surName")} id={"surName"} />

            <label htmlFor="age">Age:</label>
            <input type={"number"} {...register("age")} id={"age"} />

            <label htmlFor="gender">Gender:</label>
            {/*<select name={"gender"} id={"gender"}>*/}
            <select {...register("gender")} id={"gender"}>
                <option value={""}>Select....</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"others"}>Others</option>
            </select>

            <button type={"submit"}>Start Interview</button>
        </form>
    )

    return (
        // <form onSubmit={onSubmit}>
        // <form onSubmit={handleSubmit(onSubmit)}>
        <form onSubmit={onSubmit}>
            {/*<input {...register("firstName")}  placeholder="firstName"/>*/}
            <input  {...register('firstName', {required: true})} id="firstname" name="firstname" type="text"
                    placeholder={"firstName"}/>
            {/*{errors?.firstName && <p>{errors.firstName.message}</p>}*/}

            <input {...register("surName")} placeholder="surName"/>
            {/*<input type="email" {...register("email")} placeholder={"email"}/>*/}

            <IsolateReRender control={control}/>

            <input type="submit"/>
        </form>
    )
}


export {Form}
