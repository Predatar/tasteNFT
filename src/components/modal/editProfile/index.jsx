import React, { useEffect } from 'react';

import Btn from '../../button/btn/Btn';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './index.module.scss';

const EditProfile = ({ state, onClick }) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state]);
  return (
    <div className={styles.backdoor + ' ' + (state ? styles.backdoorActive : '')}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={onClick}>
          <span className="icon-close"></span>
        </div>
        <div className={styles.title}>Edit your Profile</div>
        <Formik
          initialValues={{
            name: '',
            userName: '',
            email: '',
            bio: '',
            file: '',
            twitch: '',
            instagram: '',
            twitter: '',
            Onlyfans: ''
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('input name'),
            userName: Yup.string().required('input userName'),
            email: Yup.string().email('Invalid email').required('input email'),
            bio: Yup.string(),
            file: Yup.string(),
            twitch: Yup.string().url(),
            instagram: Yup.string().url(),
            twitter: Yup.string().url(),
            Onlyfans: Yup.string().url()
          })}
        >
          <Form className={styles.form}>
            <label htmlFor="name">
              Name
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" />
            </label>
            <label htmlFor="userName">
              Username
              <Field type="text" id="userName" name="userName" />
              <ErrorMessage name="userName" />
            </label>
            <label htmlFor="email">
              Email
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" />
            </label>
            <div className={styles.info}>
              Add your email address to receive notifications about your activity on Foundation. This will not be shown
              on your profile.
            </div>
            <label htmlFor="bio">
              BIO
              <Field type="text" id="bio" name="bio" as="textarea" />
              <ErrorMessage name="bio" />
            </label>
            <label htmlFor="bio">
              Profile image
              <Field type="file" id="file" name="file" />
              <ErrorMessage name="bio" />
            </label>
            <div className={styles.wrapper}>
              <div className={styles.wrapperTitle}>Contacts</div>
              <div className={styles.inputWrapper + ' ' + styles.first}>
                <label htmlFor="twitch">
                  <span className="icon-twitch"></span>
                  Twitch
                </label>
                <Field type="text" id="twitch" name="twitch" />
                <ErrorMessage name="twitch" />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="instagram">
                  <span className="icon-instagram"></span>
                  Instagram
                </label>
                <Field type="text" id="instagram" name="instagram" />
                <ErrorMessage name="instagram" />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="twitter">
                  <span className="icon-twitter"></span>
                  Twitter
                </label>
                <Field type="text" id="twitter" name="twitter" />
                <ErrorMessage name="twitter" />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="onlyfans">
                  <span className="icon-onlyfans"></span>
                  Onlyfans
                </label>
                <Field type="text" id="onlyfans" name="onlyfans" />
                <ErrorMessage name="onlyfans" />
              </div>
            </div>
            <div className={styles.btn}>
              <Btn text={'Save changes'} />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditProfile;
