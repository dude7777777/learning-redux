import React from "react";

class UserListPresenter extends React.Component {
    static defaultProps = {
        user: {
            name: 'John',
            age: 2
        }
    };

    renderUser = () => {
        return(
            <ul>
                <li>{this.props.user.name}</li>
                <li>{this.props.user.age}</li>
            </ul>
        );
    }

    render() {
        return(
            <div>
                <h1>Hello World</h1>
                {this.renderUser()}
            </div>
        );
    }
}

export default UserListPresenter;