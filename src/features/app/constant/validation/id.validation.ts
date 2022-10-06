const typeTemplate = "'${name}' bukan ${type} yang valid"

export const defaultValidateMessagesId = {
  default: "Terdapat error di bagian '${name}'",
  required: "'${name}' harus diisi",
  enum: "'${name}' harus terdiri dari [${enum}]",
  whitespace: "'${name}' tidak boleh kosong",
  date: {
    format: "'${name}' format tanggal tidak valid",
    parse: "'${name}' tidak bisa diubah menjadi tanggal",
    invalid: "'${name}' tanggal tidak valid"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' harus ${len} karakter",
    min: "'${name}' minimal harus ${min} karakter",
    max: "'${name}' tidak boleh lebih dari ${max} karakter",
    range: "'${name}' harus diantara ${min} dan ${max} karakter"
  },
  number: {
    len: "'${name}' harus sama dengan ${len}",
    min: "'${name}' tidak boleh kecil dari ${min}",
    max: "'${name}' tidak boleh lebih dari ${max}",
    range: "'${name}' harus diantara ${min} dan ${max}"
  },
  array: {
    len: "'${name}' harus berisi ${len}",
    min: "'${name}' tidak bisa kurang dari ${min}",
    max: "'${name}' tidak bisa lebih dari ${max}",
    range: "'${name}' harus diantara ${min} dan ${max}"
  },
  pattern: {
    mismatch: "'${name}' pola tidak cocok ${pattern}"
  }
}
