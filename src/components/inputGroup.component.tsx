import React, { RefObject } from 'react';
import { IonRow, IonCol, IonItem, IonLabel, IonInput } from '@ionic/react';

export interface InputGroupComponentProps {
    labelName: string;
    useRefValue: RefObject<HTMLIonInputElement>;
}
 
const InputGroupComponent: React.SFC<InputGroupComponentProps> = ({ labelName, useRefValue }) => {
    return ( 
        <IonRow>
            <IonCol>
            <IonItem>
                <IonLabel position="floating">{ labelName }</IonLabel>
                <IonInput type="number" ref= { useRefValue }></IonInput>
            </IonItem>
            </IonCol>
        </IonRow>
     );
}
 
export default InputGroupComponent;
