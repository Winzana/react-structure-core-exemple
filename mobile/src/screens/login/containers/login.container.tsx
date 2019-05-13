import { IAppState, UsersActions, usersSelector } from 'core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation, initReactI18next } from 'react-i18next';
import { LoginView } from '../views/login.view';

export interface IProps {
  /**
   * Implementation of getUser from redux
   */
  getUsers: typeof UsersActions.getUsers;
  /**
   * Array of users
   */
  users: object[];
}
const LoginContainer = (props: IProps) => {
  const { getUsers, users } = props;
  const { t } = useTranslation();
  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, [users]);
  return <LoginView t={t} />;
};
const mapStateToProps = (state: IAppState) => ({
  users: usersSelector(state),
});

const mapDispatchToProps = {
  getUsers: UsersActions.getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
