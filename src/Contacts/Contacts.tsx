import React, { FC } from "react";
import { Formik, Form, Field } from "formik";

interface PropsApp {
  onClick: (name: string, number: string) => void;
}

export const ContactsList: FC<PropsApp> = ({ onClick }) => {
  const handleSubmit = (
    value: { name: string; number: string },
    { resetForm }: any
  ) => {
    onClick(value.name, value.number);
    resetForm();
  };

  return (
    <>
      <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="name" />
          <Field type="tel" name="number" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
