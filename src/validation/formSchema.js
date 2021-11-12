import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('You must enter your name')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string().oneOf(['Small', 'Medium', 'Large'], 'You must choose a size'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    ham: yup.boolean(),
    chicken: yup.boolean(),
    pineapple: yup.boolean(),
    greenPepper: yup.boolean(),
    onion: yup.boolean(),
    special: yup.string(),
})
export default formSchema;