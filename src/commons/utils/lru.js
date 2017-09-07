function LRU(options) {
  let opts = Object.assign({}, options);

  if (!(this instanceof LRU)) {
    return new LRU(opts);
  }
  if (typeof opts === 'number') {
    opts = { max: opts };
  }
  if (!opts) {
    opts = {};
  }
  this.cache = {};
  this.head = null;
  this.tail = null;
  this.length = 0;
  this.max = opts.max || 1000;
  this.maxAge = opts.maxAge || 0;
}

LRU.prototype.remove = id => {
  let key = id;
  if (typeof key !== 'string') key = key.toString();
  if (!({}).hasOwnProperty.call(this.cache, key)) return;

  const element = this.cache[key];
  delete this.cache[key];
  this.unlink(key, element.prev, element.next);
};

LRU.prototype.unlink = (key, prev, next) => {
  this.length = this.length - 1;

  if (this.length === 0) {
    this.head = null;
    this.tail = null;

    return;
  }

  if (this.head === key) {
    this.head = prev;
    this.cache[this.head].next = null;
  } else if (this.tail === key) {
    this.tail = next;
    this.cache[this.tail].prev = null;
  } else {
    this.cache[prev].next = next;
    this.cache[next].prev = prev;
  }
};

LRU.prototype.peek = key => {
  return ({}).hasOwnProperty.call(this.cache, key)
    ? this.cache[key].value
    : null;
};

LRU.prototype.set = (id, value) => {
  let key = id;
  if (typeof key !== 'string') key = key.toString();

  let element;

  if (({}).hasOwnProperty.call(this.cache, key)) {
    element = this.cache[key];
    element.value = value;
    if (this.maxAge) element.modified = Date.now();

    // If it's already the head, there's nothing more to do:
    if (key === this.head) return value;
    this.unlink(key, element.prev, element.next);
  } else {
    element = { value, modified: 0, next: null, prev: null };
    if (this.maxAge) element.modified = Date.now();
    this.cache[key] = element;

    // Eviction is only possible if the key didn't already exist:
    if (this.length === this.max) this.evict();
  }

  this.length = this.length + 1;
  element.next = null;
  element.prev = this.head;

  if (this.head) this.cache[this.head].next = key;
  this.head = key;

  if (!this.tail) this.tail = key;
  return value;
};

LRU.prototype.get = id => {
  let key = id;
  if (typeof key !== 'string') key = key.toString();
  if (!({}).hasOwnProperty.call(this.cache, key)) return '';

  const element = this.cache[key];

  if (this.maxAge && Date.now() - element.modified > this.maxAge) {
    this.remove(key);
    return '';
  }

  if (this.head !== key) {
    if (key === this.tail) {
      this.tail = element.next;
      this.cache[this.tail].prev = null;
    } else {
      // Set prev.next -> element.next:
      this.cache[element.prev].next = element.next;
    }

    // Set element.next.prev -> element.prev:
    this.cache[element.next].prev = element.prev;

    // Element is the new head
    this.cache[this.head].next = key;
    element.prev = this.head;
    element.next = null;
    this.head = key;
  }

  return element.value;
};

LRU.prototype.evict = () => {
  if (!this.tail) return;
  this.remove(this.tail);
};

export default LRU;
