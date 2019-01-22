import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getListAccount } from './starter.action.js';
const STARTER_STORE = 'STARTER_STORE';

const loadListAccount = state => state[STARTER_STORE].listAccount;

const startSelector = createSelector(
    loadListAccount,
    (listAccount) => ({ listAccount: listAccount || [] })
);

class Starter extends React.Component {
    componentDidMount() {
        this.props.getListAccount && this.props.getListAccount();
    }

    render() {
        return (
            <div>
                {this.props.listAccount.map((data, key) => (
                    <div key={key}>
                        {data.studentId}
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(startSelector, { getListAccount})(Starter);
