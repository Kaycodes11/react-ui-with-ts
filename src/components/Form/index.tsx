import React from 'react';
import {useForm, Resolver, SubmitHandler, useWatch, Control, useFieldArray} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

enum Gender {
    Male = `Male`,
    Female = `Female`,
    Others = `Others`
}

type FormValues = {
    firstName: string;
    surName: string;
    email: string;
    age?: number;
    mobile: string;
    scheduleAt?: string;
    gender:  Gender;
    experience: `Fresher` | `Experienced`;
    stack?: `MEAN` | `MERN`
    expectedSalary?: string;
    isDeveloper: boolean | string;
    pets?: { name: string }[]

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
    const {register, watch, control, handleSubmit, formState: {errors, isValid}} = useForm<FormValues>({
        mode: `onChange`,
        delayError: 500,
        defaultValues: { firstName: `Son`, surName: `Goku`, age: 18, gender: Gender.Male, pets: [] }
    });
    const {fields, append, prepend} = useFieldArray({control, name: "pets"})

    console.log(watch('firstName'));
    console.log(errors);


    // const onSubmit = handleSubmit((data) => console.log(data))
    // const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstname">FirstName:</label>
            <input {...register("firstName", { required: true, minLength: 4})} id={"firstName"}/>
            <p>{errors?.firstName?.message}</p>

            <label htmlFor="surName">SurName:</label>
            <input {...register("surName", { required: true })} id={"surName"} />
            <p>{errors?.surName?.message}</p>

            <label htmlFor="age">Age:</label>
            <input type={"number"} {...register("age", {valueAsNumber: true})} id={"age"} />

            <label htmlFor="gender">Gender:</label>
            {/*<select name={"gender"} id={"gender"}>*/}
            <select {...register("gender")} id={"gender"}>
                <option value={""}>Select....</option>
                <option value={Gender.Male}>{Gender.Male}</option>
                <option value={Gender.Female}>{Gender.Female}</option>
                <option value={Gender.Others}>{Gender.Others}</option>
            </select>
            <p>Pets</p>
            <div>
            {fields.map((field, index) => {
                return <input key={field.id} {...register(`pets.${index}.name`, {required: true})} />
            })}
            </div>
            <button type={"button"} onClick={()=> append({name: "append"})}>append</button>
            <button type={"button"} onClick={() => prepend({name: "prepend"})}>prepend</button>
            <button type={"submit"} disabled={!isValid}>Start Interview</button>
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
