<template>
  <div class="container my-5">
    <!-- JS Dropdown -->
    <div class="dropdown mb-5">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li>
          <a class="dropdown-item" href="#">Another action</a>
        </li>
        <li>
          <a class="dropdown-item" href="#"> Something else here </a>
        </li>
      </ul>
    </div>
    <!-- JS Tabs -->
    <ul id="myTab" class="nav nav-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          id="home-tab"
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#home-tab-pane"
          type="button"
          role="tab"
          aria-controls="home-tab-pane"
          aria-selected="true"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="profile-tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#profile-tab-pane"
          type="button"
          role="tab"
          aria-controls="profile-tab-pane"
          aria-selected="false"
        >
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="contact-tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#contact-tab-pane"
          type="button"
          role="tab"
          aria-controls="contact-tab-pane"
          aria-selected="false"
        >
          Contact
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="disabled-tab"
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#disabled-tab-pane"
          type="button"
          role="tab"
          aria-controls="disabled-tab-pane"
          aria-selected="false"
          disabled
        >
          Disabled
        </button>
      </li>
    </ul>
    <div id="myTabContent" class="tab-content">
      <div
        id="home-tab-pane"
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
      >
        ...
      </div>
      <div
        id="profile-tab-pane"
        class="tab-pane fade"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        ...
      </div>
      <div
        id="contact-tab-pane"
        class="tab-pane fade"
        role="tabpanel"
        aria-labelledby="contact-tab"
        tabindex="0"
      >
        ...
      </div>
      <div
        id="disabled-tab-pane"
        class="tab-pane fade"
        role="tabpanel"
        aria-labelledby="disabled-tab"
        tabindex="0"
      >
        ...
      </div>
    </div>
  </div>
</template>
