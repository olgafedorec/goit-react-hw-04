import { Field, Form, Formik } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
<header className={css.container}>
<Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if(!values.query.trim()) {
          toast.error('This field cannot be empty!');
        } else {
          onSearch(values.query);
          actions.resetForm();
        }
       
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} type="text" name="query" placeholder="Search images..."/>
        <button type="submit" className={css.button}><AiOutlineSearch size={30} className={css.icon}/></button>
      </Form>
    </Formik>
</header>
    
  );
}