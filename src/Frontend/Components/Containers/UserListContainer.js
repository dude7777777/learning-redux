import React from "react";
import { UserListPresenter } from '../Presenters';

class UserListContainer extends React.Component {
    static defaultProps = {
        user: {
            name: 'John',
            age: 2
        }
    };

    render() {
        let user = { name: this.props.user.name, age: this.props.user.age }

        return(
            <UserListPresenter
                user={user}
            />
        );
    }
}

export default UserListContainer;