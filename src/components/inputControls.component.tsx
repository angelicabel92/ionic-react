import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

export interface InputControlsComponentProps {
    selectValue: 'mkg' | 'ftlbs';
    onSelectValue: (value: 'mkg' | 'ftlbs' ) => void;
}
 
const InputControlsComponent: React.SFC<InputControlsComponentProps> = ({selectValue, onSelectValue}) => {
    const inputChangeHandler = (event: CustomEvent) => {
        onSelectValue(event.detail.value)
    }
    return ( 
        <IonSegment value={selectValue} onIonChange={inputChangeHandler}>
            <IonSegmentButton value="mkg">
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
     );
}
 
export default InputControlsComponent;
