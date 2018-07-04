import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Button,
  Collapse,
  FontIcon,
  List,
  ListItem,
} from 'react-md';

import { historyShape, navigationShape } from '../../constants/shapes';
import { settingsOperations } from '../../modules/settings';

import './sidebar.css';

const shouldBeActive = (route, item) => {
  if (item.link === route) {
    return true;
  }

  return item.children ?
    item.children.filter(shouldBeActive.bind(this, route)).length > 0 :
    false;
};

const SidebarDropdown = ({
  collapsed,
  childrenNav,
  pathname,
}) => childrenNav ? (
  <Collapse collapsed={collapsed}>
    <div className="adept-app__sidebar__dropdown">
      {childrenNav.map((child, i) => {
        const icon = child.icon ? (<FontIcon>{child.icon}</FontIcon>) : null;
        const itemClasses = classNames('adept-app__sidebar__item', {
          'adept-app__sidebar__item--active-color': shouldBeActive(pathname, child),
        });
        return (
          <Link
            to={child.link}
            key={i}
          >
            <ListItem
              className={itemClasses}
              leftAvatar={icon}
              primaryText={child.label}
            />
          </Link>
        );
      })}
    </div>
  </Collapse>
) : null;

SidebarDropdown.propTypes = {
  collapsed: PropTypes.bool,
  childrenNav: PropTypes.array,
  pathname: PropTypes.string,
};

SidebarDropdown.defaultProps = {
  collapsed: true,
  childrenNav: [],
  pathname: '/',
};

const DropdownIcon = ({
  item, opened, onClick
}) => {
  if (!item.children || item.children.length === 0) {
    return null;
  }

  const icon = opened ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
  const handleClick = () => onClick(item.label, icon === 'keyboard_arrow_down');

  return (
    <FontIcon onClick={handleClick}>{icon}</FontIcon>
  );
};

DropdownIcon.propTypes = {
  item: PropTypes.object.isRequired,
  opened: PropTypes.bool,
  onClick: PropTypes.func,
};

DropdownIcon.defaultProps = {
  opened: false,
  onClick: () => {
  },
};

const Sidebar = (
  {
    navigation,
    pathname,
    settings,
    userRole,
    onNavCollapse,
    onNavItemCollapseClick,
    onTopLevelNavClick,
  }) => {

  const shouldBeOpened = (name) => {
    return settings && settings.opened && settings.opened.indexOf(name) > -1 && !settings.collapsed;
  };

  const sidebarClasses = classNames('adept-app__sidebar', {
    'adept-app__sidebar--collapsed': settings.collapsed,
  });

  const handleSidebarCollapse = () => onNavCollapse(!settings.collapsed);
  const handleNavItemClick = (index, evt) => {
    const buttonElem = evt.target.parentNode.parentNode.querySelectorAll('.md-text');
    const clickedLabel = evt.target.textContent;
    const label = buttonElem[0] ? buttonElem[0].textContent : clickedLabel;

    if (clickedLabel === 'keyboard_arrow_down' || clickedLabel === 'keyboard_arrow_up') {
      onNavItemCollapseClick(label, settings.opened && settings.opened.indexOf(label) === -1);
    } else {
      onTopLevelNavClick(index, label);
      onNavCollapse(false);
      onNavItemCollapseClick(label, true);
    }

  };

  return (
    <div className={sidebarClasses}>
      <List>
        {navigation.map((navItem, i) => {
          const hasCorrectRole = !navItem.roles || userRole.some(
            (role) => navItem.roles.indexOf(role) >= 0);
          if (!hasCorrectRole) {
            return null;
          }
          const collapsed = !shouldBeOpened(navItem.label);
          const leftIcon = navItem.icon ? (<FontIcon>{navItem.icon}</FontIcon>) : null;
          const rightIcon = (
            <DropdownIcon item={navItem} opened={collapsed} onClick={onNavItemCollapseClick} />
          );
          const parentItemClasses = classNames('adept-app__sidebar__item', {
            'adept-app__sidebar__item--active': shouldBeActive(pathname, navItem),
          });

          return (
            <span key={i} title={navItem.label}>
              <ListItem
                className={parentItemClasses}
                leftAvatar={leftIcon}
                primaryText={navItem.label}
                rightIcon={rightIcon}
                style={{
                  backgroundColor: '#f6f6f6'
                }}
                onClick={handleNavItemClick.bind(this, i)}
              />
              <SidebarDropdown
                childrenNav={navItem.children}
                collapsed={collapsed}
                pathname={pathname}
              />
            </span>
          );
        })}
      </List>
      <Button
        flat
        className="adept-app__sidebar__collapse"
        onClick={handleSidebarCollapse}
      >
        <span className="adept-app__sidebar__collapse-label">Collapse</span>
        <FontIcon>arrow_back</FontIcon>
      </Button>
    </div>
  );
};

Sidebar.propTypes = {
  navigation: navigationShape,
  pathname: PropTypes.string,
  settings: PropTypes.object,
  userRole: PropTypes.arrayOf(PropTypes.string),
  onNavCollapse: PropTypes.func,
  onNavItemCollapseClick: PropTypes.func,
  onTopLevelNavClick: PropTypes.func,
};

Sidebar.defaultProps = {
  navigation: [],
  pathname: '/',
  settings: {},
  userRole: [],
  onNavCollapse: () => {
  },
  onNavItemCollapseClick: () => {
  },
  onTopLevelNavClick: () => {
  },
};

class SidebarContainer extends Component {

  static propTypes = {
    history: historyShape.isRequired,
    navigation: navigationShape,
    pathname: PropTypes.string,
    settings: PropTypes.object,
    setSidebarCollapsed: PropTypes.func,
    setSidebarNavCollapsed: PropTypes.func,
    userRole: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    navigation: [],
    pathname: '/',
    settings: {},
    setSidebarCollapsed: () => {},
    setSidebarNavCollapsed: () => {},
    userRole: [],
  };

  constructor(props) {
    super(props);

    this.handleTopLevelClick = this.handleTopLevelClick.bind(this);
  }

  handleTopLevelClick(index, label) {
    const navItem = this.props.navigation[index];
    if (navItem.link) {
      this.props.history.push(navItem.link);
    } else if (navItem.children && navItem.children.length > 0) {
      this.props.history.push(navItem.children[0].link);
    }

  }

  render() {
    return (
      <Sidebar
        navigation={this.props.navigation}
        pathname={this.props.pathname}
        settings={this.props.settings.sidebar}
        userRole={this.props.userRole}
        onNavCollapse={this.props.setSidebarCollapsed}
        onNavItemCollapseClick={this.props.setSidebarNavCollapsed}
        onTopLevelNavClick={this.handleTopLevelClick}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.adept.settings,
  pathname: state.adept.routing.location.pathname,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...settingsOperations,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarContainer));
