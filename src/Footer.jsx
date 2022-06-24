import React from 'react';

export default function Footer() {
  return (
    <div class="sticky-bottom">
      <div
        class="alert alert-light d-flex justify-content-between border-top"
        role="alert"
      >
        <div class="position-relative">
          <i class="bi bi-telephone-fill fs-5"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </div>
        <div>
          <i class="bi bi-person-circle fs-5"></i>
        </div>
        <div>
          <i class="bi bi-grid-3x3-gap-fill fs-1"></i>
        </div>
        <div>
          <i class="bi bi-gear-fill fs-5"></i>
        </div>
        <div>
          <i class="bi bi-record-circle fs-5"></i>
        </div>
      </div>
    </div>
  );
}
