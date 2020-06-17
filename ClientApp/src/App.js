import React, { Component } from 'react';
import './custom.css'
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Graduation } from './components/graduation/Graduation';
import { Wedding } from './components/wedding/Wedding';
import { Gallery } from './components/wedding/Gallery';
import { Registry } from './components/wedding/Registry';
import { Faq } from './components/wedding/Faq';
import { GradGallery } from './components/graduation/GradGallery';
import { Academics } from './components/graduation/Academics';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/wedding' component={Wedding}/>
            <Route exact path='/graduation' component={Graduation} />
            <Route exact path='/wedding/gallery' component={Gallery} />
            <Route exact path='/wedding/registry' component={Registry} />
            <Route exact path='/wedding/faq' component={Faq} />
            <Route exact path='/graduation/gallery' component={GradGallery} />
            <Route exact path='/graduation/academics' component={Academics} />
      </Layout>
    );
  }
}
