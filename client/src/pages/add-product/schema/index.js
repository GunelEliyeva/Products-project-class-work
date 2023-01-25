import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    imgurl: Yup.string()
    .min(2, "Too Short!")
    .max(3000, "Too Long!")
    .required("Required"),
    model: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
    name: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
    price: Yup.number()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
   
});