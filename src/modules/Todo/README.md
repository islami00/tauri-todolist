
## Data model.

* A `User` can create many `TodoLists`, A `TodoList` belongs to one `User` (One to many).
* A `TodoList` can have many labels, and a label can belong to many todos (Many to many with join table being `LabeledBy`).
* A `TodoList` can have many `Todo`s, and a `Todo` can only belong to one `TodoList`.
* A `Todo` must have a `description`, and is either `completed` or `undone`.

### Keys

Todo!

## Data passing

For the todo page, we have the `TodoEntry` component which is the route page rendered, this fetches the data and subscribes to our store.

The data from the subscription bubbles down to the `TodoPage` component which then displays the Todos and shoots off events to edit the store. Which then get refreshed as our subscription returns things to us (Note that we should be able to pass event types alongside the subscription event because we may need to delete data, so subscription will also shoot events).

### Subscription events

The subscription events are either a `Create`, `Update` or `Delete`. 

* An Update edits a specific or a group of data so we can select by key (Store data in a map for this reason) and replace it. 
* A `Delete` removes a specific data or group, again, easily done with key based access instead of array-stored. 
* A `Create` adds a new data entry. 

> Note that we do error checking before reacting. For `Create`, check for key collision. For `Update` check for nonexistent keys and turn to Create if nonexistent (This makes Update double as create, we can provide a variant or restrict it if this is an issue), for `Delete` check if keys exist

## Store implementation

The nature of the subscription events allows our store to be a state machine that's initialised on the `TodoPageEntry`. This allows it to be passed as a prop just like this subscription assumes. The data would be in `context` and the `send` function allows for tweaking state.

## Persistence

The store can retain data on the file system on each create/update/delete event, and initialise itself from the file system based on the key passed to it