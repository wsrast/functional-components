import React, {Component} from 'react';
import Functional from './Functional';
import Functional2 from './Functional2';
import Functional3 from './Functional3';

export default class Main extends Component {
    render() {
        return <section>
            Hello from Main!
            <Functional/>
            <Functional2 name="foo" />
            <Functional3 />
        </section>
    }
}