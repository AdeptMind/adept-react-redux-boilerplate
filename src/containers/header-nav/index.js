import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MenuButton } from 'react-md';
import { withRouter } from 'react-router-dom';

import { historyShape } from '../../constants/shapes';
import { removeUserToken } from '../../services/storage';
import { UserAvatar } from '../../components/user';
import { userOperations } from '../../modules/users';
import { userShape } from '../../constants/shapes';

import './header-nav.css';

const HeaderNav = ({
  id,
  menuItems,
  user,
  onMenuClick,
}) => {
  const handleMenuClick = (evt) => {
    onMenuClick(evt.target.textContent);
  };

  return (
    <div className='adept-app__header-nav'>
      {user && (
        <UserAvatar
          user={user}
        />
      )}
      <MenuButton
        icon
        id={id}
        menuItems={menuItems}
        onMenuClick={handleMenuClick}
      >
        more_vert
      </MenuButton>
    </div>
  );
};

HeaderNav.propTypes = {
  id: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.string),
  user: userShape,
  onMenuClick: PropTypes.func,
};

HeaderNav.defaultProps = {
  id: 'adept-app-header',
  menuItems: ['Account', 'Sign out'],
  user: {},
  onMenuClick: () => {},
};

class HeaderNavContainer extends Component {

  static propTypes = {
    history: historyShape.isRequired,
    setDataset: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(button) {
    if (button) {
      switch (button.toLowerCase()) {
        case 'account':
          break;
        case 'sign out':
          removeUserToken();
          window.location.href = '/';
          break;
        default:
          break;
      }
    }
  }

  render() {
    return (
      <HeaderNav
        {...this.props}
        onMenuClick={this.handleMenuClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.adept.users.me,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...userOperations,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderNavContainer));
