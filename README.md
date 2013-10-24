ui-bootstrap-alerts
===================

Alerts for AngularJS in bootstrap style

## Install

    bower install ui-bootstrap-alerts

add the module `ui.bootstrap.alerts` as module dependency to your angular app.

## Usage

Inject the `AlertService` in the controller where you want to use it. Than call

    AlertService.error('Something went wrong');

If you have added 
  
    <alerts></alerts>

somewhere in your corresponding view, your alert should be displayed immediately.

The alert can be dismissed by the user by clicking on the 'x'. If the user does not
click the 'x', the alert will be there until you programmatically remove it. You
can do this by either clearing all messages

    AlertService.clear();

or by removing it by calling

    AlertService.remove(alertOjectWhichWasReturnedFromAlertServiceOnCreate);

## Types

    error   --> red
    danger  --> red
    warning --> yellow
    success --> green
    info    --> blue


## Context

If you have a bigger single page app you possibly want to display alerts on
several "pages". Therefore you can use the `context`. Just specify it like this

    AlertService.context('foo').error("Something went wrong");

In your view you need to add the `context` attribute to the alert directive

    <alerts context='foo'></alerts>

On instantiating the corresponding controller you should add a `clear` of this
context

    AlertService.context('foo').clear();

otherwise the user would see the same alerts as before if he navigates back to
this page.

If you do not specify the context it will be 'general'. So you are always in a
context.
