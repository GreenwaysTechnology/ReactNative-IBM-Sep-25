import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { produce } from 'immer'

class Customer extends React.Component {
    state = {
        customer: {
            id: 1,
            name: 'Subramanian',
            contact: {
                address: {
                    city: 'Chennai'
                },
                communcation: {
                    mobileNo: '9000000'
                }
            }
        }
    }
    onUpdate = () => {
        // this.setState((prevState) => {
        //     return produce(prevState, (draft) => {
        //         draft.customer.contact.communcation.mobileNo = '9003706368'
        //     })
        // })
        this.setState(produce(this.state, (draft) => {
            draft.customer.contact.communcation.mobileNo = '9003706368'
        }))
    }
    render() {
        return <div>
            <h1>Customer info</h1>
            <h2>Name : {this.state.customer.name}</h2>
            <h2>Phone : {this.state.customer.contact.communcation.mobileNo}</h2>
            <button onClick={this.onUpdate}>Update Mobile No</button>
        </div>
    }
}


const App = () => {
    return <>
        <Customer />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
