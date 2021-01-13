import * as Yup from "yup";

const primaryDataFormValidator = Yup.object({
  identifier: Yup.string()
    .length(8, "Introduzca una identificación válida")
    .matches(/[0-9]{8}/, { message: "Introduzca una identificación válida" })
    .required("Campo requerido"),
  birthDate: Yup.date()
    .max(new Date(), "La fecha no puede ser mayor al día de hoy")
    .required("Campo requerido"),
  cellphone: Yup.string()
    .length(9, "Introduzca un número válido")
    .matches(/[0-9]{9}/, { message: "Introduzca un número válido" })
    .required("Campo requerido"),
  agreeWithDataPolicy: Yup.boolean()
    .required("Campo requerido")
    .oneOf([true], "Debe aceptar estos términos"),
  agreeWithCommunicationPolicy: Yup.boolean()
    .required("Campo requerido")
    .oneOf([true], "Debe aceptar estos términos"),
});

export { primaryDataFormValidator };
