import React from 'react';
import {useForm, Resolver, SubmitHandler, useWatch, Control} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
    firstName: string;
    surName: string;
    email: string;

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

function IsolateReRender({ control }: { control: Control<FormValues> }) {
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
    const {register, control, handleSubmit} = useForm<FormValues>();

    // const onSubmit = handleSubmit((data) => console.log(data))
    // const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    const onSubmit = handleSubmit((data) => console.log(data))

    return (
        // <form onSubmit={onSubmit}>
        // <form onSubmit={handleSubmit(onSubmit)}>
        <form onSubmit={onSubmit}>
            {/*<input {...register("firstName")}  placeholder="firstName"/>*/}
            <input  {...register('firstName', { required: true })} id="firstname" name="firstname" type="text" placeholder={"firstName"} />
            {/*{errors?.firstName && <p>{errors.firstName.message}</p>}*/}

            <input {...register("surName")} placeholder="surName"/>
            {/*<input type="email" {...register("email")} placeholder={"email"}/>*/}

            <IsolateReRender control={control} />

            <input type="submit"/>
        </form>
    )
}


export {Form}