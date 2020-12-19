<template>
  <div>
    <div
      class="kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <h3 class="kt-head__title">
        User Notifications
        <span class="ml-2 btn btn-success btn-sm btn-bold btn-font-md"
          >23 new</span
        >
      </h3>
      <ul
        class="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-success kt-notification-item-padding-x"
        role="tablist"
      >
        <li class="nav-item">
          <a
            v-on:click="setActiveTab"
            data-tab="0"
            class="nav-link active"
            data-toggle="tab"
            href="#"
            role="tab"
            >Alerts</a
          >
        </li>
        <li class="nav-item">
          <a
            v-on:click="setActiveTab"
            data-tab="1"
            class="nav-link"
            data-toggle="tab"
            href="#"
            role="tab"
            >Events</a
          >
        </li>
        <li class="nav-item">
          <a
            v-on:click="setActiveTab"
            data-tab="2"
            class="nav-link"
            data-toggle="tab"
            href="#"
            role="tab"
            >Logs</a
          >
        </li>
      </ul>
    </div>

    <b-tabs class="kt-hide-tabs" v-model="tabIndex">
      <b-tab active>
        <perfect-scrollbar
          class="kt-notification kt-margin-t-10 kt-margin-b-10"
          style="max-height: 40vh; position: relative;"
        >
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-line-chart kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New order has been received
              </div>
              <div class="kt-notification__item-time">2 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-box-1 kt-font-brand"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New customer is registered
              </div>
              <div class="kt-notification__item-time">3 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-chart2 kt-font-danger"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Application has been approved
              </div>
              <div class="kt-notification__item-time">3 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-image-file kt-font-warning"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New file has been uploaded
              </div>
              <div class="kt-notification__item-time">5 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-bar-chart kt-font-info"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New user feedback received
              </div>
              <div class="kt-notification__item-time">8 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-pie-chart-2 kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                System reboot has been successfully completed
              </div>
              <div class="kt-notification__item-time">12 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-favourite kt-font-danger"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New order has been placed
              </div>
              <div class="kt-notification__item-time">15 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item kt-notification__item--read">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-safe kt-font-primary"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Company meeting canceled
              </div>
              <div class="kt-notification__item-time">19 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-psd kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New report has been received
              </div>
              <div class="kt-notification__item-time">23 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon-download-1 kt-font-danger"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Finance report has been generated
              </div>
              <div class="kt-notification__item-time">25 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon-security kt-font-warning"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New customer comment recieved
              </div>
              <div class="kt-notification__item-time">2 days ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-pie-chart kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New customer is registered
              </div>
              <div class="kt-notification__item-time">3 days ago</div>
            </div>
          </a>
        </perfect-scrollbar>
      </b-tab>

      <b-tab>
        <perfect-scrollbar
          class="kt-notification kt-margin-t-10 kt-margin-b-10"
          style="max-height: 40vh; position: relative;"
        >
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-psd kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New report has been received
              </div>
              <div class="kt-notification__item-time">23 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon-download-1 kt-font-danger"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Finance report has been generated
              </div>
              <div class="kt-notification__item-time">25 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-line-chart kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New order has been received
              </div>
              <div class="kt-notification__item-time">2 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-box-1 kt-font-brand"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New customer is registered
              </div>
              <div class="kt-notification__item-time">3 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-chart2 kt-font-danger"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Application has been approved
              </div>
              <div class="kt-notification__item-time">3 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-image-file kt-font-warning"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New file has been uploaded
              </div>
              <div class="kt-notification__item-time">5 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-bar-chart kt-font-info"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New user feedback received
              </div>
              <div class="kt-notification__item-time">8 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-pie-chart-2 kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                System reboot has been successfully completed
              </div>
              <div class="kt-notification__item-time">12 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-favourite kt-font-brand"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New order has been placed
              </div>
              <div class="kt-notification__item-time">15 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item kt-notification__item--read">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-safe kt-font-primary"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Company meeting canceled
              </div>
              <div class="kt-notification__item-time">19 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-psd kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New report has been received
              </div>
              <div class="kt-notification__item-time">23 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon-download-1 kt-font-danger"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Finance report has been generated
              </div>
              <div class="kt-notification__item-time">25 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon-security kt-font-warning"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New customer comment recieved
              </div>
              <div class="kt-notification__item-time">2 days ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-pie-chart kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New customer is registered
              </div>
              <div class="kt-notification__item-time">3 days ago</div>
            </div>
          </a>
        </perfect-scrollbar>
      </b-tab>

      <b-tab>
        <perfect-scrollbar
          class="kt-notification kt-margin-t-10 kt-margin-b-10"
          style="max-height: 40vh; position: relative;"
        >
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-psd kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New report has been received
              </div>
              <div class="kt-notification__item-time">23 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon-download-1 kt-font-danger"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Finance report has been generated
              </div>
              <div class="kt-notification__item-time">25 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-line-chart kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New order has been received
              </div>
              <div class="kt-notification__item-time">2 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-box-1 kt-font-brand"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New customer is registered
              </div>
              <div class="kt-notification__item-time">3 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-chart2 kt-font-danger"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Application has been approved
              </div>
              <div class="kt-notification__item-time">3 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-image-file kt-font-warning"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New file has been uploaded
              </div>
              <div class="kt-notification__item-time">5 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-bar-chart kt-font-info"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New user feedback received
              </div>
              <div class="kt-notification__item-time">8 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-pie-chart-2 kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                System reboot has been successfully completed
              </div>
              <div class="kt-notification__item-time">12 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-favourite kt-font-brand"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New order has been placed
              </div>
              <div class="kt-notification__item-time">15 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item kt-notification__item--read">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-safe kt-font-primary"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Company meeting canceled
              </div>
              <div class="kt-notification__item-time">19 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-psd kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New report has been received
              </div>
              <div class="kt-notification__item-time">23 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon-download-1 kt-font-danger"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                Finance report has been generated
              </div>
              <div class="kt-notification__item-time">25 hrs ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon-security kt-font-warning"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New customer comment recieved
              </div>
              <div class="kt-notification__item-time">2 days ago</div>
            </div>
          </a>
          <a href="#" class="kt-notification__item">
            <div class="kt-notification__item-icon">
              <i class="flaticon2-pie-chart kt-font-success"></i>
            </div>
            <div class="kt-notification__item-details">
              <div class="kt-notification__item-title">
                New customer is registered
              </div>
              <div class="kt-notification__item-time">3 days ago</div>
            </div>
          </a>
        </perfect-scrollbar>
      </b-tab>
    </b-tabs>
  </div>
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.kt-hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
export default {
  name: "KTDropdownNotification",
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
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
    }
  },
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "assets/media/misc/bg-1.jpg";
    }
  }
};
</script>
