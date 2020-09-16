import React from "react";
import {connect} from "react-redux";
import {requestUsers} from "../../redux/usersReducer";
import User from "./User/User";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/usersSelectors";


class UsersContainer extends React.PureComponent {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users} />
        </>
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state).map(user => <User key={user.id} id={user.id} name={user.name} status={user.status} />),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
})

export default connect(mapStateToProps, {requestUsers})(UsersContainer);
