"use client";

import { Button, Input } from "@/components";
import React from "react";
import { LoginFormValues, SignupFormValues } from "../../../interface";

import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { motion } from "framer-motion";

export const LoginForm = () => {
  // form molecule
  const initialValues: LoginFormValues = { email: "", password: "" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white w-full"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div className="email_container py-5">
            <Input
              label="Email"
              placeholder="Email"
              type="email"
              id="email"
              // setter={() => {}}
              value={""}
              className="w-full border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div className="password__container">
            <Input
              label="password"
              placeholder="password"
              className="w-full border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="password"
              id="password"
              // setter={() => {}}
              value={""}
            />
          </div>

          <div className="button__container my-10">
            <Button size="large" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Formik>
    </motion.div>
  );
};

export const SignUpForm = () => {
  const initialValues: SignupFormValues = { name: "", email: "", password: "" };
  // form molecule

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white w-full"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div className="email_container pt-5 ">
            <Input
              label="Username"
              placeholder="name"
              type="text"
              id="name"
         
              value={""}
              className="w-full border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="email_container py-5">
            <Input
              label="Email"
              placeholder="Email"
              type="email"
              id="email"
        
              value={""}
              className="w-full border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div className="password__container">
            <Input
              label="password"
              placeholder="password"
              className="w-full border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="password"
              id="password"
            
              value={""}
            />
          </div>

          <div className="button__container my-10">
            <Button size="large" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Formik>
    </motion.div>
  );
};
