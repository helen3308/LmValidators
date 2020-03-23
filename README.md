# what is this?

Add validators as directive

#Installation

`npm i LmValidators --save`

Then...

```
import {EmailValidator} from 'LmValidators';

<input type="text" name="email" placeholder="Email" #email emailValidator matInput required />
<mat-error *touchedWithErrors="emailModel">
    {{ emailModel | validationMessage: { 'required': 'Email address is required.', 'emailValidator': 'Email address is invalid.' } }}
</mat-error>
```

## Options

