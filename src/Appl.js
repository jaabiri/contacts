import React, { Component } from 'react';
import Fcc from "./components/fcc/test"

class Appl extends Component {
    render() {
        return (
            <div>
                    <Fcc>
                        {
                             note=><h1>{note}</h1>
                        }
                    </Fcc>
                     <Fcc>
                        {
                             note=><h1>{note+1}</h1>
                        }
                    </Fcc>
                     <Fcc>
                        {
                             note=><h1>{note+2}</h1>
                        }
                    </Fcc>
            </div>
        );
    }
}

export default Appl;