<template>
  <div>
    <!-- Navbar-->
    <header class="app-header">
      <a class="app-header__logo" href="">ProjectName</a>
      <!-- Sidebar toggle button--><a
        class="app-sidebar__toggle"
        href=""
        data-toggle="sidebar"
        aria-label="Hide Sidebar"
      >
        <font-awesome-icon icon="bars" />
      </a>
      <!-- Navbar Right Menu-->
      <ul class="app-nav">
        <!--Notification Menu-->
        <li class="dropdown">
          <a
            class="app-nav__item"
            href=""
            data-toggle="dropdown"
            aria-label="Show notifications"
          >
            <font-awesome-icon icon="bell" />
          </a>
          <ul class="app-notification dropdown-menu dropdown-menu-right">
            <li class="app-notification__title">
              You have 4 new notifications.
            </li>
            <div class="app-notification__content">
              <li>
                <a class="app-notification__item" href="javascript:;">
                  <div>
                    <p class="app-notification__message">Title</p>
                    <p class="app-notification__meta">2021-03-01</p>
                  </div></a
                >
              </li>
            </div>
            <li class="app-notification__footer">
              <a href="">See all notifications.</a>
            </li>
          </ul>
        </li>
        <!-- User Menu-->
        <li class="dropdown">
          <a
            class="app-nav__item"
            href=""
            data-toggle="dropdown"
            aria-label="Open Profile Menu"
          >
            <font-awesome-icon icon="user" />
          </a>
          <ul class="dropdown-menu settings-menu dropdown-menu-right">
            <li>
              <a class="dropdown-item" href="">
                <font-awesome-icon icon="cog" />

                Settings</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="">
                <font-awesome-icon icon="user" />

                Profile</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="">
                <font-awesome-icon icon="sign-out-alt" />

                Logout</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </header>
    <!-- Sidebar menu-->
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user text-center">
        <img
          class="app-sidebar__user-avatar"
          width="60"
          src="../assets/logo.png"
          alt="User Image"
        />
        <div>
          <p class="app-sidebar__user-name">Administrator</p>
          <p class="app-sidebar__user-designation">Frontend Developer</p>
        </div>
      </div>
      <ul class="app-menu">
        <li>
          <a class="app-menu__item" href="">
            <font-awesome-icon icon="chevron-right" class="mr-2" />
            <span class="app-menu__label">Dashboard</span></a
          >
        </li>
        <li class="treeview">
          <a class="app-menu__item" href="#" data-toggle="treeview">
            <font-awesome-icon icon="chevron-right" class="mr-2" />
            <span class="app-menu__label">Pages</span
            ><i class="treeview-indicator fa fa-angle-right"></i
          ></a>
          <ul class="treeview-menu">
            <li>
              <a class="treeview-item" href=""
                ><i class="icon fa fa-circle-o"></i> Pages</a
              >
            </li>
            <li>
              <a class="treeview-item" href=""
                ><i class="icon fa fa-circle-o"></i> Pages</a
              >
            </li>
            <li>
              <a class="treeview-item" href=""
                ><i class="icon fa fa-circle-o"></i> Pages</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <main class="app-content">
      <div class="app-title">
        <div>
          <h1>
            <font-awesome-icon icon="home" />
            Dashboard
          </h1>
          <p>sub_content</p>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item">
            <font-awesome-icon icon="home" />
          </li>
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="widget-small primary coloured-icon">
            <i class="icon">
              <font-awesome-icon icon="star" />
            </i>
            <div class="info">
              <h4>Users</h4>
              <p><b>5</b></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="widget-small info coloured-icon">
            <i class="icon">
              <font-awesome-icon icon="star" />
            </i>
            <div class="info">
              <h4>Likes</h4>
              <p><b>25</b></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="widget-small warning coloured-icon">
            <i class="icon">
              <font-awesome-icon icon="star" />
            </i>
            <div class="info">
              <h4>Uploades</h4>
              <p><b>10</b></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="widget-small danger coloured-icon">
            <i class="icon">
              <font-awesome-icon icon="star" />
            </i>
            <div class="info">
              <h4>Stars</h4>
              <p><b>500</b></p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="tile">
            <div class="tile-title-w-btn">
              <h3 class="title">Items</h3>
              <div class="btn-group">
                <a class="btn btn-primary" href="">
                  <font-awesome-icon icon="plus" />
                </a>
                <a class="btn btn-primary" href="">
                  <font-awesome-icon icon="edit" />
                </a>
                <a class="btn btn-primary" href="">
                  <font-awesome-icon icon="trash" />
                </a>
              </div>
            </div>
            <div class="tile-body">Content</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="tile">
            <div class="tile-title-w-btn">
              <h3 class="title">Items</h3>
              <p>
                <a class="btn btn-primary icon-btn" href=""
                  ><i class="fa fa-plus"></i>Add Item
                </a>
              </p>
            </div>
            <div class="tile-body">Content</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-title-w-btn">
              <h3 class="title">Items</h3>
              <p>
                <a class="btn btn-primary icon-btn" href=""
                  ><i class="fa fa-plus"></i>Add Item
                </a>
              </p>
            </div>
            <div class="tile-body">Content</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Apps",
  mounted() {
    "use strict";

    var treeviewMenu = $(".app-menu");

    // Toggle Sidebar
    $('[data-toggle="sidebar"]').click(function (event) {
      event.preventDefault();
      $(".app").toggleClass("sidenav-toggled");
    });

    // Activate sidebar treeview toggle
    $("[data-toggle='treeview']").click(function (event) {
      event.preventDefault();
      if (!$(this).parent().hasClass("is-expanded")) {
        treeviewMenu
          .find("[data-toggle='treeview']")
          .parent()
          .removeClass("is-expanded");
      }
      $(this).parent().toggleClass("is-expanded");
    });

    // Set initial active toggle
    $("[data-toggle='treeview.'].is-expanded")
      .parent()
      .toggleClass("is-expanded");

    //Activate bootstrip tooltips
    $("[data-toggle='tooltip']").tooltip();
  },
};
</script>
