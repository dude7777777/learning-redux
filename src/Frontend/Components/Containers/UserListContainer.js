import React from "react";
import { connect } from 'react-redux';
import { UserListPresenter } from '../Presenters';
import * as UserListActions from '../../Actions/UserActions';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => { dispatch(UserListActions.fetchUser()); }
    };
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

class UserListContainer extends React.Component {
    render() {
        return(
            <UserListPresenter
                user={this.state.user}
            />
        );
    }
}

const ConnectedUserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserListContainer);

export default ConnectedUserListContainer;