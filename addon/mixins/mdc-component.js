import Ember from 'ember';

const { get, set, computed } = Ember;

export const addClass = (className, component) => {
  get(component, 'mdcClasses').addObject(className);
};

export const removeClass = (className, component) => {
  get(component, 'mdcClasses').removeObject(className);
};

export const MDCComponent = Ember.Mixin.create({
  //region Ember Hooks
  init() {
    this._super(...arguments);
    set(this, 'mdcClasses', []);
  },
  didInsertElement() {
    this._super(...arguments);
    const foundation = this.createFoundation();
    set(this, 'foundation', foundation);
    foundation.init();
  },
  willDestroyElement() {
    this._super(...arguments);
    get(this, 'foundation').destroy();
  },
  //endregion

  //region Properties
  /**
   * @type {MDCRadioFoundation}
   */
  foundation: null,
  /**
   * @type {String[]}
   */
  mdcClasses: null,
  //endregion

  //region Computed Properties
  /**
   * @type {String}
   */
  mdcClassNames: computed('mdcClasses.[]', function() {
    return get(this, 'mdcClasses').join(' ');
  }),
  //endregion

  //region Methods
  /**
   * Syncs the Ember Component properties with the MDC Foundation properties
   * @param {String} prop - A property name that exists on the Foundation
   *                        (as prop and setProp) and on the component
   */
  sync(prop) {
    const foundation = get(this, 'foundation');
    if (!foundation) { return; }
    const value = get(this, prop);
    const Prop = prop.capitalize();
    if (foundation[`is${Prop}`]() !== value) {
      foundation[`set${Prop}`](value);
    }
  },
  //endregion
});

export default MDCComponent;
