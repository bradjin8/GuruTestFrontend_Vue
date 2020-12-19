import objectPath from "object-path";
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME
} from "@/store/htmlclass.module";
import store from "@/store";
import { ADD_CLASSNAME } from "../store/htmlclass.module";

const HtmlClass = {
  // get layout configs store getters
  config: store.getters.layoutConfig(),

  init() {
    // init base layout
    this.initLayout();

    // init header and subheader menu
    this.initHeader();

    // init aside and aside menu
    this.initAside();

    // init footer
    this.initFooter();

    // init skins
    this.initSkins();
  },

  /**
   * Init Layout
   */
  initLayout() {
    if (objectPath.has(this.config, "self.body.class")) {
      const _selfBodyClass = objectPath
        .get(this.config, "self.body.class")
        .toString();
      if (_selfBodyClass) {
        const bodyClasses = _selfBodyClass.split(" ");
        bodyClasses.forEach(cssClass => {
          store.dispatch(ADD_BODY_CLASSNAME, cssClass);
        });
      }
    }

    if (
      objectPath.get(this.config, "self.layout") === "boxed" &&
      objectPath.has(this.config, "self.body.background-image")
    ) {
      document.body.style.backgroundImage = `url(${objectPath.get(
        this.config,
        "self.body.background-image"
      )})`;
    }

    // Offcanvas directions
    store.dispatch(ADD_BODY_CLASSNAME, "kt-quick-panel--right");
    store.dispatch(ADD_BODY_CLASSNAME, "kt-demo-panel--right");
    store.dispatch(ADD_BODY_CLASSNAME, "kt-offcanvas-panel--right");

    // Properly close mobile header menu
    store.dispatch(REMOVE_BODY_CLASSNAME, "kt-header-menu-wrapper--on");
  },

  /**
   * Init Header
   */
  initHeader() {
    // Fixed header
    if (objectPath.get(this.config, "header.self.fixed.desktop")) {
      store.dispatch(ADD_BODY_CLASSNAME, "kt-header--fixed");
      store.dispatch(ADD_CLASSNAME, {
        position: "header",
        className: "kt-header--fixed"
      });
    } else {
      store.dispatch(ADD_BODY_CLASSNAME, "kt-header--static");
    }

    if (objectPath.get(this.config, "header.self.fixed.mobile")) {
      store.dispatch(ADD_BODY_CLASSNAME, "kt-header-mobile--fixed");
      store.dispatch(ADD_CLASSNAME, {
        position: "header_mobile",
        className: "kt-header-mobile--fixed"
      });
    }

    if (objectPath.get(this.config, "header.menu.self.layout")) {
      store.dispatch(ADD_CLASSNAME, {
        position: "header_menu",
        className: `kt-header-menu--layout-${objectPath.get(
          this.config,
          "header.menu.self.layout"
        )}`
      });
    }
  },

  /**
   * Inin Subheader
   */

  /**
   * Init Aside
   */
  initAside() {
    if (objectPath.get(this.config, "aside.self.display") !== true) {
      return;
    }

    store.dispatch(ADD_BODY_CLASSNAME, "kt-aside--enabled");

    // Fixed Aside
    if (objectPath.get(this.config, "aside.self.fixed")) {
      store.dispatch(ADD_BODY_CLASSNAME, "kt-aside--fixed");
      store.dispatch(ADD_CLASSNAME, {
        position: "aside",
        className: "kt-aside--fixed"
      });
    } else {
      store.dispatch(ADD_BODY_CLASSNAME, "kt-aside--static");
    }

    // Default fixed
    if (objectPath.get(this.config, "aside.self.minimize.default")) {
      store.dispatch(ADD_BODY_CLASSNAME, "kt-aside--minimize");
    }

    // Dropdown Submenu
    if (objectPath.get(this.config, "aside.menu.dropdown")) {
      store.dispatch(ADD_CLASSNAME, {
        position: "aside_menu",
        className: "kt-aside-menu--dropdown"
      });
    }
  },

  /**
   * Init Footer
   */
  initFooter() {
    // Fixed header
    if (objectPath.get(this.config, "footer.self.fixed")) {
      store.dispatch(ADD_BODY_CLASSNAME, "kt-footer--fixed");
    }
  },

  /**
   * Set the body class name based on page skin options
   */
  initSkins() {
    if (objectPath.get(this.config, "header.self.skin")) {
      store.dispatch(
        ADD_BODY_CLASSNAME,
        `kt-header-base-${objectPath.get(this.config, "header.self.skin")}`
      );
    }
    if (objectPath.get(this.config, "header.menu.desktop.submenu.skin")) {
      store.dispatch(
        ADD_BODY_CLASSNAME,
        `kt-header-menu-${objectPath.get(
          this.config,
          "header.menu.desktop.submenu.skin"
        )}`
      );
    }
    if (objectPath.get(this.config, "brand.self.skin")) {
      store.dispatch(
        ADD_BODY_CLASSNAME,
        `kt-brand-${objectPath.get(this.config, "brand.self.skin")}`
      );
    }
    if (objectPath.get(this.config, "aside.self.skin")) {
      store.dispatch(
        ADD_BODY_CLASSNAME,
        `kt-aside-${objectPath.get(this.config, "aside.self.skin")}`
      );
    }
  }
};

export default HtmlClass;
