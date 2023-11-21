import React from "react";
import './Form.css';

export default function CloseAccount(props) {



    return (
        <div className="close-account-form">
            <div className="form-header">
                <h4>close account</h4>
                <button onClick={()=>props.setModalOpen(false)} className="close-btn">✖️</button>
            </div>
            <form className="form">
                <div className="email">
                    <label htmlFor="email">Email:</label><br />
                    <input required type="text" name="email" />
                </div>
                <div className="radio">
                    <h4>want to file a UAR</h4>
                    <div>
                        <input type="radio" id="yes" name="response" value="yes" />
                        <label for="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="response" value="no" />
                        <label for="no">No</label>
                    </div>
                </div>
                <div className="reason">
                    <label htmlFor="reason">Reason:</label><br />
                    <input type="text" name="email" />
                </div>
                <div className="note">
                    <label for="note">Note:</label>
                    <textarea id="note" name="note" rows="4" cols="50"></textarea>
                </div>
            </form>
            <div className="charge-radio">
                <div>
                    <input type="radio" id="yes" name="response" value="yes" />
                    <label for="yes">Charge closure fee</label>
                </div>
                <div>
                    <button className='submit'>Close account</button>
                </div>
            </div>
        </div>
    )
}