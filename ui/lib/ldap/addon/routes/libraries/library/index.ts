/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import type RouterService from '@ember/routing/router-service';

export default class LdapLibraryRoute extends Route {
  @service declare readonly router: RouterService;

  redirect() {
    this.router.transitionTo('vault.cluster.secrets.backend.ldap.libraries.library.details');
  }
}
