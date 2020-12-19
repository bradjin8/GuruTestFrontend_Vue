<template>
  <div>
    <div class="alert alert-light alert-elevate" role="alert">
      <div class="alert-icon alert-icon-top">
        <i class="flaticon-warning kt-font-brand"></i>
      </div>
      <div class="alert-text">
        <p>
          The layout builder helps to configure the layout with preferred
          options and preview it in real time. The configured layout options
          will be saved until you change or reset them. To use the layout
          builder choose the layout options and click the
          <code>Preview</code> button to preview the changes.
        </p>
      </div>
    </div>

    <div class="kt-portlet kt-portlet--tabs">
      <div class="kt-portlet__head">
        <div class="kt-portlet__head-toolbar">
          <ul
            ref="builder-tab"
            class="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-left nav-tabs-line-primary"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                v-on:click="setActiveTab"
                data-tab="0"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="true"
              >
                Skins
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="1"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
              >
                Page
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="2"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
              >
                Header
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="3"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
              >
                Subheader
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="4"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
              >
                Content
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="5"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
              >
                Aside
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                v-on:click="setActiveTab"
                data-tab="6"
                data-toggle="tab"
                href="#"
                role="tab"
                aria-selected="false"
              >
                Footer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--begin::Form-->
      <form class="kt-form kt-form--label-right" v-on:submit="submit($event)">
        <div class="kt-portlet__body">
          <b-tabs class="kt-hide-tabs" v-model="tabIndex">
            <b-tab active>
              <div class="kt-section kt-margin-t-30">
                <div class="kt-section__body">
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Header Skin:</label>
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.header.self.skin"
                      >
                        <option value="light" selected="">
                          Light(default)
                        </option>
                        <option value="dark">Dark</option>
                      </select>
                      <div class="form-text text-muted">Select header skin</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label"
                      >Header Menu Skin:</label
                    >
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.header.menu.desktop.submenu.skin"
                      >
                        <option value="light" selected=""
                          >Light(default)
                        </option>
                        <option value="dark">Dark</option>
                      </select>
                      <div class="form-text text-muted">Select header skin</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label"
                      >Logo Bar Skin:</label
                    >
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.brand.self.skin"
                      >
                        <option value="dark" selected="">Dark(default)</option>
                        <option value="light">Light</option>
                      </select>
                      <div class="form-text text-muted">
                        Select logo bar skin
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Aside Skin:</label>
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.aside.self.skin"
                      >
                        <option value="dark" selected="">Dark(default)</option>
                        <option value="light">Light</option>
                      </select>
                      <div class="form-text text-muted">
                        Select left aside skin
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="kt-section kt-margin-t-30">
                <div class="kt-section__body">
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Display Page Toolbar:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.toolbar.display"
                            value="true"
                            checked=""
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">
                        Display or hide the page's right center toolbar(demos
                        switcher, documentation and page builder links)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="kt-section kt-margin-t-30">
                <div class="kt-section__body">
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Desktop Fixed Header:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.header.self.fixed.desktop"
                            value="true"
                            checked=""
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">
                        Enable fixed header for desktop mode
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Mobile Fixed Header:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.header.self.fixed.mobile"
                            value="true"
                            checked=""
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">
                        Enable fixed header for mobile mode
                      </div>
                    </div>
                  </div>

                  <div
                    class="kt-separator kt-separator--space-lg kt-separator--border-dashed"
                  ></div>

                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Display Header Menu:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.header.menu.self.display"
                            value="true"
                            checked=""
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">
                        Display header menu
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Header Menu Layout:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.header.menu.self.layout"
                      >
                        <option value="default" selected="">Default</option>
                        <option value="tab">Tab</option>
                      </select>
                      <div class="form-text text-muted">
                        Select header menu layout style
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Header Menu Arrows:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.header.menu.self['root-arrow']"
                            value="true"
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">
                        Enable header menu root link arrows
                      </div>
                    </div>
                  </div>

                  <div
                    class="kt-separator kt-separator--space-lg kt-separator--border-dashed"
                  ></div>

                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Header Search Layout:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.header.topbar.search.layout"
                      >
                        <option value="offcanvas">Offcanvas</option>
                        <option value="dropdown" selected="">Dropdown</option>
                      </select>
                      <div class="form-text text-muted">
                        Select header menu layout style
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="kt-section kt-margin-t-30">
                <div class="kt-section__body">
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Display Subheader:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.subheader.display"
                            value="true"
                            checked=""
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">Display subheader</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Fixed Subheader:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.subheader.fixed"
                            value="true"
                            checked=""
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">
                        Enable fixed(sticky) subheader. Requires
                        <code>Solid</code> subheader style.
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Width:</label>
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.subheader.width"
                      >
                        <option value="fluid" selected="">Fluid</option>
                        <option value="fixed">Fixed</option>
                      </select>
                      <div class="form-text text-muted">
                        Select layout width type.
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label"
                      >Subheader Style:</label
                    >
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.subheader.style"
                      >
                        <option value="transparent">Transparent</option>
                        <option value="solid" selected="">Solid</option>
                      </select>
                      <div class="form-text text-muted">
                        Select subheader style
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label"
                      >Subheader Layout:</label
                    >
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.subheader.layout"
                      >
                        <option value="subheader-v1" selected="">
                          Subheader v1
                        </option>
                      </select>
                      <div class="form-text text-muted">
                        Select subheader layout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="kt-section kt-margin-t-30">
                <div class="kt-section__body">
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Width:</label>
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.content.width"
                      >
                        <option value="fluid">Fluid</option>
                        <option value="fixed" selected="">Fixed</option>
                      </select>
                      <div class="form-text text-muted">
                        Select layout width type.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="kt-section kt-margin-t-30">
                <div class="kt-section__body">
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Display:</label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.aside.self.display"
                            value="true"
                            checked=""
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">Display aside</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Fixed:</label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.aside.self.fixed"
                            value="true"
                            checked=""
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">
                        Set fixed aside layout
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Minimize:</label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.aside.self.minimize.toggle"
                            value="true"
                            checked=""
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">
                        Allow aside minimizing
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Default Minimize:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.aside.self.minimize.default"
                            value="true"
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">
                        Set aside minimized by default
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">
                      Submenu Toggle:
                    </label>
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.aside.menu.dropdown"
                        @change="onChangeAsideMenuDropdown($event)"
                      >
                        <option value="true">Dropdown</option>
                        <option value="false" selected="">Accordion</option>
                      </select>
                      <div class="form-text text-muted">
                        Select submenu toggle mode(works only when
                        <code>Fixed Mode</code> is disabled)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>

            <b-tab>
              <div class="kt-section kt-margin-t-30">
                <div class="kt-section__body">
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Fixed Footer:</label>
                    <div class="col-lg-9 col-xl-4">
                      <span class="kt-switch kt-switch--icon-check">
                        <label>
                          <input
                            type="checkbox"
                            v-model="config.footer.self.fixed"
                            value="true"
                          />
                          <span></span>
                        </label>
                      </span>
                      <div class="form-text text-muted">Set fixed footer</div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Width:</label>
                    <div class="col-lg-9 col-xl-4">
                      <select
                        class="form-control"
                        v-model="config.footer.self.width"
                      >
                        <option value="fluid" selected="">Fluid</option>
                        <option value="fixed">Fixed</option>
                      </select>
                      <div class="form-text text-muted">
                        Select layout width type.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>

        <div class="kt-portlet__foot">
          <div class="kt-form__actions">
            <div class="row">
              <div class="col-lg-3"></div>
              <div class="col-lg-9">
                <button type="submit" class="btn btn-brand mr-2">
                  <i class="la la-eye"></i>
                  Preview
                </button>
                <button v-on:click="reset($event)" class="btn btn-secondary">
                  <i class="la la-recycle"></i>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <!--end::Form-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/store/breadcrumbs.module";

export default {
  name: "builder",
  data() {
    return {
      tabIndex: 0
    };
  },
  components: {},
  computed: {
    ...mapGetters(["layoutConfig"]),

    config() {
      return this.layoutConfig();
    }
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));

      // set current active tab
      event.target.classList.add("active");

      // keep active tab
      localStorage.setItem("builderTab", this.tabIndex);
    },

    /**
     * Submit form
     * @param event
     */
    submit(event) {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem("config", JSON.stringify(this.config));
      window.location.reload();
    },

    /**
     * Reset config
     */
    reset(event) {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem("config");
      window.location.reload();
    },

    /**
     * Set previous tab active
     */
    setActivePreviousTab() {
      this.tabIndex = parseInt(localStorage.getItem("builderTab")) || 0;
      const links = this.$refs["builder-tab"].querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }
      this.$refs["builder-tab"]
        .querySelector(`[data-tab="${this.tabIndex}"]`)
        .classList.add("active");
    },

    onChangeAsideMenuDropdown(e) {
      this.config.aside.self.fixed = !/true/.test(e.target.value);
    }
  },
  mounted() {
    // set the tab from previous
    this.setActivePreviousTab();

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Layout Builder" }]);
  },
  destroyed() {
    localStorage.removeItem("builderTab");
  }
};
</script>
