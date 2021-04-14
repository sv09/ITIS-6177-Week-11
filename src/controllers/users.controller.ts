// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';


import {get} from '@loopback/rest';

export class UsersController {
  @get('/users')
  users(): object {
    return {
      id: 1,
      name: 'John D'
    };
  }
}
