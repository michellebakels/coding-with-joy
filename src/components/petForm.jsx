import React from 'react'
import Dropzone from 'react-dropzone'

const PetForm = ({setShowForm, setPetForm, petForm}) => {
    return(
        <div className="petForm">
            <form onSubmit={() => setShowForm(false)}>
                <label>Pet Name:</label>
                <input
                    type="text"
                    name="petName"
                    value={petForm?.petName}
                    onChange={(e) => setPetForm({...petForm, petName: e.target.value})}
                    className="formItem"
                />
                <br/>
                <label>Pet Type:</label>
                <input
                    type="text"
                    name="petType"
                    value={petForm?.petType}
                    onChange={(e) => setPetForm({...petForm, petType: e.target.value})}
                    className="formItem"
                />
                <br/>
                <label>I love you because:</label>
                <input
                    type="text"
                    name="loveYou"
                    value={petForm?.loveYou}
                    onChange={(e) => setPetForm({...petForm, loveYou: e.target.value})}
                    className="formItem"
                />
                <br/>
                <label>My favorite thing you do is:</label>
                <input
                    type="text"
                    name="favoriteThing"
                    value={petForm?.favoriteThing}
                    onChange={(e) => setPetForm({...petForm, favoriteThing: e.target.value})}
                    className="formItem"
                />
                <br/>
                <div>
                {(petForm?.image).length <= 0 ?
                    <Dropzone
                        className="formItem"
                        accept='image/*'
                        onDrop={(image) => {
                            console.log(image);
                            setPetForm({...petForm, image: URL.createObjectURL(image[0])})
                        }}
                    >
                        {({getRootProps, getInputProps}) => (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        )}
                    </Dropzone>
                    :
                    <div className="formItem">
                    Got it!
                    </div>
                }
                </div>
                <button type="submit" className="formItem">Submit</button>
            </form>
        </div>
    )
}

export default PetForm