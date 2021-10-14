import {useForm, FormProvider} from "react-hook-form";

function ContextFormProvider(props) {

    const methods = useForm();

    return (

        <FormProvider
            {...methods} >

            {props.children}

        </FormProvider>

    );

}

export default ContextFormProvider;
